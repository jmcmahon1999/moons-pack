const LightLayer = Java.loadClass('net.minecraft.world.level.LightLayer')

const MAX_FREEZE_TICKS = 150

const COLD_BIOMES = [
	"still_life:alpine_heathlands",
	"still_life:alpine_plains",
	"still_life:alpine_tundra",
	"still_life:arctic_beach",
	"still_life:arctic_deep_ocean",
	"still_life:arctic_desert",
	"still_life:arctic_desert_basin",
	"still_life:arctic_glacier",
	"still_life:arctic_river",
	"still_life:arctic_shallow_ocean",
	"still_life:arctic_wetlands",
	"still_life:barren_arctic_desert",
	"still_life:barren_peaks",
	"still_life:barren_tundra",
	"still_life:boreal_alpine_tundra",
	"still_life:boreal_river",
	"still_life:cold_barren_highlands",
	"still_life:cold_deep_ocean",
	"still_life:cold_desert",
	"still_life:cold_semi_desert",
	"still_life:cold_shallow_ocean",
	"still_life:cold_steppe",
	"still_life:cold_taiga",
	"still_life:cold_taiga_clearings",
	"still_life:cold_tundra_beach",
	"still_life:evergreen_taiga",
	"still_life:frozen_caves",
	"still_life:glacial_basin",
	"still_life:lush_tundra",
	"still_life:snowy_barren_peaks",
	"still_life:snowy_boreal_alpine_tundra",
	"still_life:snowy_peaks",
	"still_life:snowy_tundra",
	"still_life:taiga_beach",
	"still_life:taiga_highlands",
	"still_life:tundra_beach",
	"still_life:tundra_river",
    "still_life:frozen_caves"
]
const MOUNTAIN_BIOMES = [
    "minecraft:meadow",
    "minecraft:frozen_peaks",
    "minecraft:jagged_peaks",
    "minecraft:stony_peaks",
    "minecraft:snowy_slopes",
    "minecraft:cherry_grove",
    "still_life:alpine_heathlands",
	"still_life:alpine_plains",
	"still_life:alpine_tundra",
	"still_life:arid_highlands",
	"still_life:barren_mediterranean_highlands",
	"still_life:barren_peaks",
	"still_life:boreal_alpine_tundra",
	"still_life:cold_barren_highlands",
	"still_life:dry_tropical_highlands",
	"still_life:larch_woodlands",
	"still_life:mediterranean_highlands",
	"still_life:mediterranean_wooded_highlands",
	"still_life:savanna_highlands",
	"still_life:snowy_barren_peaks",
	"still_life:snowy_boreal_alpine_tundra",
	"still_life:snowy_peaks",
	"still_life:taiga_highlands",
	"still_life:tropical_highlands",
	"still_life:wooded_highlands"
]

const WARM_ARMOR = [
	"minecraft:leather_helmet",
	"minecraft:leather_chestplate",
	"minecraft:leather_leggings",
	"minecraft:leather_boots"
]

function checkHolder(holder, queries) {
    for (let query of queries) {
        if (holder.is(query)) return true;
    }
    return false;
}

PlayerEvents.tick(event => {
    const { player } = event
	if (player.isCreative() || player.isSpectator()) return;
    if (!player.persistentData.getBoolean('kjsFreezing')) return;

    player.setTicksFrozen(Math.min(MAX_FREEZE_TICKS, player.getTicksFrozen() + 2));
	if (!player.level.canSeeSky(player.blockPosition())) return;
	//if (player.isFallFlying()) return;
	let freezeRate = player.persistentData.getInt('kjsFreezeRate');
	if (freezeRate < 0) return;
    if (player.tickCount % freezeRate == 0 || freezeRate == 0) {
        player.setTicksFrozen(Math.min(MAX_FREEZE_TICKS, player.getTicksFrozen() + 1));
    }
})


PlayerEvents.tick(event => {
    const { player } = event

    if (player.isCreative() || player.isSpectator()) {
		player.persistentData.putBoolean('kjsFreezing', false);
		player.persistentData.putInt('kjsFreezeRate', -1);
		return;
	}
    if (player.tickCount % 40 != 0) return;

    const current = player.getTicksFrozen()
    const biomeHolder = player.level.getBiomeManager().getBiome(player.blockPosition())
    const isCold = checkHolder(biomeHolder, COLD_BIOMES);
    const isMountain = checkHolder(biomeHolder, MOUNTAIN_BIOMES);
    const worldHeight = 360;
    
    if (!isCold && !isMountain) {
		player.persistentData.putBoolean('kjsFreezing', false);
		player.persistentData.putInt('kjsFreezeRate', -1);
		return;
	}

    const pos = player.blockPosition()
	const blockLight = player.level.getBrightness(LightLayer.BLOCK, pos);
	if (blockLight >= 8 && !player.level.canSeeSky(player.blockPosition())) {
		player.persistentData.putBoolean('kjsFreezing', false);
		player.persistentData.putInt('kjsFreezeRate', -1);
		return;
	}

    let freezeY = Math.floor((worldHeight - player.y) / 10) * 10;

    const isThundering = player.level.isThundering();
    const isRaining = player.level.isRaining();
    const isNight = player.level.isNight();

    let freezeRate = Math.max(freezeY - ((isRaining + isThundering + isNight) * 20) - (isCold * 80), 0);

	let warmArmorPieces = 0;
	for (let stack of player.getArmorSlots()) {
		warmArmorPieces += checkHolder(stack.getItemHolder(), WARM_ARMOR);
	}

	freezeRate = Math.floor(freezeRate / 2);
	freezeRate += warmArmorPieces * 40;
    
    if (freezeRate <= 120) {
        player.persistentData.putInt('kjsFreezeRate', freezeRate);
        player.persistentData.putBoolean('kjsFreezing', true);
    }
    else {
        player.persistentData.putInt('kjsFreezeRate', -1);
    }

    /*if (player.username == "jmcmoon" && player.tickCount % 120 == 0) {
        player.tell(
            `frozen=${player.getTicksFrozen()} freezeRate=${freezeRate} freezing=${player.persistentData.getBoolean('kjsFreezing')}`
        )
        player.tell(
            `isCold=${isCold} isMountain=${isMountain} biome=${String(biomeHolder.getRegisteredName())} armor=${warmArmorPieces}`
        )
        player.tell(
            `Rain=${isRaining} Night=${isNight} Thunder=${isThundering} Sky=${player.level.canSeeSky(player.blockPosition())} Light=${blockLight}`
        )

    }*/
})