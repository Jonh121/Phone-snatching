# Ped Phone Snatch

A lightweight standalone FiveM resource that lets players snatch phones from
ambient peds who visibly have a phone out.

## Features

- Transparent glass-style NUI `[E] Snatch phone` prompt next to eligible peds
- Detects common ambient phone scenarios and attached phone props
- Player and per-ped cooldowns
- Basic snatch animation and fleeing ped reaction
- Server-side reward rate limit
- Hooks for ox_inventory, QBCore, and ESX
- Fully transparent NUI overlay that does not block gameplay

## Installation

1. Copy the `ped_phone_snatch` folder into your server's `resources` directory.
2. Add this line to `server.cfg`:

```cfg
ensure ped_phone_snatch
```

3. Restart the resource or server.

## Inventory reward setup

Open `server.lua`, find the `INVENTORY INTEGRATION` section, then uncomment the
implementation matching your server.

Make sure `phone` exists in your inventory item definitions, or change:

```lua
Config.Reward.item = 'phone'
```

in `config.lua`.

## Configuration

Interaction distance, cooldowns, prompt text, eligible phone models, scenarios,
ped reactions, and reward quantities are configurable in `config.lua`.

## Notes

Ambient ped animations and props vary by location and game build. The script
checks both known phone scenarios and attached phone objects to improve
compatibility.

The server can rate-limit reward events, but a fully authoritative validation
of an ambient client-owned ped is not possible. For high-economy servers,
consider adding your own anti-cheat telemetry or routing reward issuance
through a trusted gameplay system.

## Reward

The resource now gives one inventory item named `phone` and automatically detects ox_inventory, QBCore, or ESX. Ensure an item named `phone` exists in your inventory item definitions.
