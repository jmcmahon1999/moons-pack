import toml from "https://cdn.jsdelivr.net/npm/toml@3.0.0/+esm";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"

marked.setOptions({ gfm: true });

export function loadMarkdown(md_path, md_id) {
    fetch(md_path)
        .then((r) => {
            if (!r.ok) throw new Error(`Failed to load ${md_path}`);
            return r.text();
        })
        .then((md) => {
            document.getElementById(md_id).innerHTML = marked.parse(md);
        })
        .catch((err) => {
            document.getElementById(md_id).innerHTML =
                `<p><em>${md_path} could not be loaded.</em></p><hr />`;
            console.error(err);
        });
}

export async function getPackVersion() {
    const packText = await fetch("/pack.toml").then((r) => {
        if (!r.ok) throw new Error("Failed to load pack.toml");
        return r.text();
    });
    const pack = toml.parse(packText);
    const versionElement = document.querySelector("#current-version");
    versionElement.innerHTML = `v${pack.version}`;
}

class Project {
    constructor(host, data) {
        this.projectId = data.projectId;
        this.data = data;
        this.host = host;
    }

    get title() {
        if (this.host == "modrinth") {
            return this.data.project.title;
        }
        if (this.host == "curseforge") {
            return this.data.project.name;
        }
        return this.data.name;
    }

    get version() {
        let ver;
        let masks = [
            "fabric",
            "forge",
            "neo",
            "neoforge",
            "mc",
            "jar",
            "zip",
            "mod"
        ];
        masks = masks.concat(
            this.title.toLowerCase()
                .split(" "))
            .filter(word => !/^[0-9]+$/.test(word)
            )
        if (this.host == "modrinth") {
            ver = this.data.version.version_number;
            masks = masks.concat(this.data.version.game_versions);
        } else if (this.host == "curseforge") {
            ver = this.data.version.displayName;
            masks = masks.concat(this.data.version.gameVersions);
        } else if (this.host == "github") {
            return this.data.versionId;
        }
        else {
            return;
        }
        ver = ver.replace(/[-_+]+/g, "-")
        const semverMasks = masks
            .map(mask => mask.match(/^(\d+)\.(\d+)\.(\d+)$/))
            .filter(Boolean)
            .map(mask => {
                const [, major, minor, patch] = mask;
                return `${major}\\.${minor}(?:\\.${patch})?`;
            });
        masks = masks
            .filter(Boolean)
            .map(mask => mask.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .concat(semverMasks)
            .sort((a, b) => a.includes('?') - b.includes('?') || b.length - a.length);
        const regex = new RegExp(masks.join("|"), "gi");
        const result = ver.replace(regex, "").replace(/^[-.]+|[-.]+$/g, "");;
        return result;
    }

    get author() {
        if (this.host == "modrinth") {
            return this.data.author.username;
        }
        if (this.host == "curseforge") {
            return this.data.project.authors[0].name;
        }
        if (this.host == "github") {
            return this.data.projectId.split("/")[0];
        }
    }

    get projectType() {
        return this.data.projectType;
    }

    get projectUrl() {
        if (this.host == "modrinth") {
            return `https://modrinth.com/project/${this.data.projectId}`;
        }
        if (this.host == "curseforge") {
            return `https://www.curseforge.com/minecraft/mc-mods/${this.data.project.slug}`;
        }
        if (this.host == "github") {
            return `https://github.com/${this.data.projectId}`;
        }
        return "/";
    }

    get versionUrl() {
        if (this.host == "modrinth") {
            return `https://modrinth.com/project/${this.data.projectId}/version/${this.data.versionId}`;
        }
        if (this.host == "curseforge") {
            return `https://www.curseforge.com/minecraft/mc-mods/${this.data.project.slug}/files/${this.data.versionId}`;
        }
        if (this.host == "github") {
            return `https://github.com/${this.data.projectId}/releases/tag/${this.data.versionId}`;
        }
        return this.data.url;
    }

    get iconUrl() {
        if (this.host == "modrinth") {
            return this.data.project.icon_url;
        }
        if (this.host == "curseforge") {
            return this.data.project.logo.thumbnailUrl;
        }
        if (this.host == "github") {
            return "https://cdn.simpleicons.org/github";
        }
    }

    get authorUrl() {
        if (this.host == "modrinth") {
            return `https://modrinth.com/user/${this.data.author.id}`;
        }
        if (this.host == "curseforge") {
            return this.data.project.authors[0].url;
        }
        if (this.host == "github") {
            return `https://github.com/${this.data.projectId.split("/")[0]}`
        }
        return;
    }
}

async function getVersions(projects, host) {
    const versionIds = projects.map((m) => m.versionId);
    const query = encodeURIComponent(JSON.stringify(versionIds));
    const url =
        host == "modrinth"
            ? `https://api.modrinth.com/v2/versions?ids=${query}`
            : `/curseforge/versions?ids=${query}`;
    const response = await fetch(url);
    if (response.status != 200) {
        console.error(
            `Failed to get ${host} versions; ${response.status} ${response.statusText}`,
        );
        return;
    }
    let json = await response.json();
    if (host == "curseforge") json = json.data;
    const versionMap = new Map(json.map((item) => [item.id, item]));
    return projects.map((m) => ({
        ...m,
        version: versionMap.get(m.versionId),
    }));
}

async function getAuthors(projects, host) {
    const authorIds = [
        ...new Set(projects.map((m) => m.version.author_id)),
    ];
    const query = encodeURIComponent(JSON.stringify(authorIds));
    const response = await fetch(
        `https://api.modrinth.com/v2/users?ids=${query}`,
    );
    if (response.status != 200) {
        console.error(
            `Failed to get Modrinth authors; ${response.status} ${response.statusText}`,
        );
        return;
    }
    const json = await response.json();
    const authorMap = new Map(json.map((item) => [item.id, item]));
    return projects.map((m) => ({
        ...m,
        author: authorMap.get(m.version.author_id),
    }));
}

async function getProjects(meta, host) {
    const projectIds = meta.map((m) => m.projectId);
    if (!projectIds?.length) {
        return [];
    }
    const query = encodeURIComponent(JSON.stringify(projectIds));
    const url =
        host == "modrinth"
            ? `https://api.modrinth.com/v2/projects?ids=${query}`
            : `/curseforge/mods?ids=${query}`;
    const response = await fetch(url);
    if (response.status != 200) {
        console.error(
            `Failed to get ${host} projects; ${response.status} ${response.statusText}`,
        );
        return [];
    }
    let json = await response.json();
    if (host == "curseforge") json = json.data;
    const projectMap = new Map(json.map((item) => [item.id, item]));
    let projects = meta.map((m) => ({
        ...m,
        project: projectMap.get(m.projectId),
    }));

    projects = await getVersions(projects, host);
    if (host == "modrinth") projects = await getAuthors(projects);

    return projects;
}

async function fetchProjectInfo(meta) {
    const modrinthMeta = meta.filter((m) => m.host == "modrinth");
    const curseMeta = meta.filter((m) => m.host == "curseforge");
    const otherMeta = meta.filter(
        (m) => !["modrinth", "curseforge"].includes(m.host),
    );
    let projects = [
        ...otherMeta,
        ...(await getProjects(modrinthMeta, "modrinth")),
        ...(await getProjects(curseMeta, "curseforge")),
    ];
    projects = projects.map((m) => new Project(m.host, m));
    return projects;
}

async function loadMeta(path) {
    try {
        const tomlText = await fetch(`/${path}`).then((r) => r.text());
        const data = toml.parse(tomlText);

        if (!data) return;

        const name = data.name;
        const modrinth = data.update?.modrinth;
        const curseforge = data.update?.curseforge;
        const github = data.update?.github;
        const filename = data.filename;
        const slug = path.split("/").at(-1);
        const projectType = path.split("/")[0].replace(/s+$/, "")

        if (!!modrinth) {
            return {
                name: name,
                host: "modrinth",
                projectId: modrinth["mod-id"],
                versionId: modrinth["version"],
                projectType: projectType
            };
        }
        if (!!curseforge) {
            return {
                name: name,
                host: "curseforge",
                projectId: curseforge["project-id"],
                versionId: curseforge["file-id"],
                projectType: projectType
            };
        }
        if (!!github) {
            return {
                name: name,
                host: "github",
                projectId: github["slug"],
                versionId: github["tag"],
                projectType: projectType
            };
        }
        if (data?.download) {
            if (slug == "still-life") {
              return {
                  name: "Still Life",
                  host: "modrinth",
                  projectId: "fK6aflho",
                  versionId: "DfG6wLbI",
                  projectType: projectType
              }
            }
            return {
                name: name,
                host: "url",
                projectId: slug,
                projectType: projectType,
                url: data.download.url
            }
        }
    } catch (err) {
        console.warn(`Failed to process ${path}`, err);
    }
}

async function loadMetaIndex(tbody) {
    const packText = await fetch("/index.toml").then((r) => {
        if (!r.ok) throw new Error("Failed to load pack.toml");
        return r.text();
    });
    const pack = toml.parse(packText);

    if (!Array.isArray(pack.files)) {
        tbody.innerHTML = "<p>No files found.</p>";
        return;
    }

    const pwFiles = pack.files
        .map((f) => f.file)
        .filter(
            (f) => f && f.endsWith(".pw.toml"),
        );

    if (pwFiles.length === 0) {
        tbody.innerHTML = "<p>No .pw.toml files found.</p>";
        return;
    }

    const promises = [];
    for (const path of pwFiles) {
        promises.push(loadMeta(path));
    }
    return promises;
}

async function buildContents(tbody, promises) {
    Promise.all(promises).then(async (meta) => {
        const projects = await fetchProjectInfo(meta);
        const projectTypeRank = {
            mod: 0,
            resourcepack: 1,
            datapack: 2,
            shader: 3
        }
        projects.sort((a, b) => {
            const typeA = projectTypeRank[a.projectType] ?? Infinity;
            const typeB = projectTypeRank[b.projectType] ?? Infinity;
            return typeA - typeB || a.title.localeCompare(b.title, "en", { ignorePunctuation: true });
        });

        tbody.innerHTML = "";
        for (const project of projects) {
            const tr = document.createElement("tr");
            tr.setAttribute("id", project.modId);

            const tdName = document.createElement("td");
            tdName.innerHTML = `<a href="${project.projectUrl}" target="_blank" rel="noopener noreferrer">${project.title}</a>`;

            const tdVersion = document.createElement("td");
            tdVersion.innerHTML = !!project.version ?
                `<a href="${project.versionUrl}" target="_blank" rel="noopener noreferrer">${project.version}</a>`
                : `-`;

            const tdAuthor = document.createElement("td");
            tdAuthor.innerHTML = !!project.authorUrl ?
                `<a href="${project.authorUrl}" target="_blank" rel="noopener noreferrer">${project.author}</a>`
                : `-`;
            const tdProjectType = document.createElement("td");
            tdProjectType.setAttribute("style", "text-align: right")
            tdProjectType.textContent = project.data.projectType.charAt(0).toUpperCase() + project.data.projectType.slice(1);

            const tdHost = document.createElement("td");
            tdHost.innerHTML = !!project.iconUrl ?
                `<a href="${project.url}" target="_blank" rel="noopener noreferrer">
                <img height="32" width="32" src="${project.iconUrl}"/>
              </a>` :
                `<div class="host-icon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F2F5F3" class="bi bi-file-earmark-fill" viewBox="0 0 16 16">
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z"/>
              </svg></div>`;

            tr.append(tdHost, tdName, tdVersion, tdAuthor, tdProjectType);
            tbody.appendChild(tr);
        }
    });
}

export async function buildProjectList() {
    const tbody = document.querySelector("#mod-list tbody");
    try {
        const promises = await loadMetaIndex(tbody);
        buildContents(tbody, promises);
    } catch (err) {
        console.error(err);
        tbody.textContent = `Failed to fetch project listing!`
    }
}