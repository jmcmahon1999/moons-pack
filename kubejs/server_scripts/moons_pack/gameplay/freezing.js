const TagKey = Java.loadClass('net.minecraft.tags.TagKey')
const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

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

function checkBiome(biomeHolder, biomes) {
    for (let biome of biomes) {
        if (biomeHolder.is(biome)) return true;
    }
    return false;
}

PlayerEvents.tick(event => {
    const { player } = event
    if (player.isCreative() || player.isSpectator()) return;
    if (!player.persistentData.getBoolean('kjsFreezing')) return;

    player.setTicksFrozen(Math.min(MAX_FREEZE_TICKS, player.getTicksFrozen() + 2));
    if (player.tickCount % player.persistentData.getInt('kjsFreezeRate') == 0) {
        player.setTicksFrozen(Math.min(MAX_FREEZE_TICKS, player.getTicksFrozen() + 1));
    }
})


PlayerEvents.tick(event => {
    const { player } = event

    if (player.isCreative() || player.isSpectator()) return;
    if (player.tickCount % 40 != 0) return;

    const current = player.getTicksFrozen()
    const biomeHolder = player.level.getBiomeManager().getBiome(player.blockPosition())
    const isCold = checkBiome(biomeHolder, COLD_BIOMES);
    const isMountain = checkBiome(biomeHolder, MOUNTAIN_BIOMES);
    const worldHeight = player.level.getMaxBuildHeight() + Math.abs(player.level.getMinBuildHeight())
    
    if (!isCold && !isMountain) return;

    let shouldFreeze = false;
    let freezeY = Math.floor((worldHeight - player.y) / 10) * 10 - (isCold * 60);

    const isThundering = player.level.isThundering();
    const isRaining = player.level.isRaining();
    const isNight = player.level.isNight();

    let freezeRate = Math.max(freezeY - ((isRaining + isThundering + isNight) * 20), 0);

    if (freezeY < 160) {
        player.persistentData.putBoolean('kjsFreezing', true)
        player.persistentData.putInt('kjsFreezeRate', freezeRate)
    } else {
        player.persistentData.putBoolean('kjsFreezing', false)
    }

    /*if (player.tickCount % 120 == 0) {
        player.tell(
            `Y=${Math.floor(player.y)} freezeY=${freezeY} freezeRate=${freezeRate} ticksFrozen=${player.getTicksFrozen()}`
        )
        player.tell(
            `isCold=${isCold} isMountain=${isMountain} biome=${String(biomeHolder.getRegisteredName())}`
        )
        player.tell(
            `Rain=${isRaining} Night=${isNight} Thunder=${isThundering}`
        )
    }*/
})