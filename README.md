# netflix cloning

# setup

https://ui.shadcn.com/docs/tailwind-v4
참고

```shell
bun create vite .
# react 19로 업데이트
bun update --latest
bun install tailwindcss @tailwindcss/vite
bun install -D @types/node prettier-plugin-tailwindcss
# bun vite설정, shadcn tailwindv4설정(tailwind설정, path-resolve설정 포함), router 만들기...
bunx shadcn@canary init
# 하고 shadcn dark mode 검색해서 만들면 세팅 끝
```
