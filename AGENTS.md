# AGENTS.md — cms-contract

## Ruolo

Source of truth Zod per pagine CMS, registry pagine fisse, `zodToFieldMeta` per il backoffice.

## Documentazione

- [docs/cms.md](docs/cms.md) — estratto requisiti per questo repo
- Workspace: `../../docs/cms-requirements.md` (se aperto come workspace)

## Comandi

```bash
pnpm install   # esegue prepare → tsup
pnpm build
pnpm typecheck
pnpm test
```

## Release

1. Bump `version` in `package.json`
2. Tag git `v0.x.x`
3. Aggiornare pin nei consumer: `file:../norton-tanzarella-cms-contract` (dev) o `github:org/repo#v0.x.x` (CI/prod)
4. Ogni breaking change su schemi → changelog + aggiornare estratti `docs/cms.md` nei tre consumer

## Milestone corrente

**v0.1.0 (M1):** sezioni `hero`, `features`, `featuredCollection`, `cta`; registry `home` only.
