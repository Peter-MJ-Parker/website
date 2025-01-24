---
editUrl: false
next: false
prev: false
title: "EventType"
---

A bitfield that discriminates event modules

## Example

```ts
export default eventModule({
    //highlight-next-line
    type : EventType.Discord,
    name : 'guildMemberAdd'
    execute(member : GuildMember) {
        console.log(member)
    }
})
```

## Enumeration Members

### Discord

> **Discord**: `1`

The EventType for handling discord events

#### Source

[src/core/structures/enums.ts:51](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/enums.ts#L51)

***

### External

> **External**: `3`

The EventType for handling external events.
Could be for example, `process` events, database events

#### Source

[src/core/structures/enums.ts:60](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/enums.ts#L60)

***

### Sern

> **Sern**: `2`

The EventType for handling sern events

#### Source

[src/core/structures/enums.ts:55](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/enums.ts#L55)
