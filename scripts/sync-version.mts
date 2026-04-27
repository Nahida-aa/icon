// scripts/sync-version.ts
const newVersion = process.argv[2];
if (!newVersion) {
  console.error("请提供版本号，例如: bun scripts/sync-version.ts 1.0.0");
  process.exit(1);
}

const glob = new Bun.Glob("packages/*/package.json");
for await (const path of glob.scan(".")) {
  const file = Bun.file(path);
  const pkg = await file.json();
  pkg.version = newVersion;
  // 同时修复依赖中的 workspace:* (如果需要的话，其实 bun publish 会处理)
  await Bun.write(path, JSON.stringify(pkg, null, 2));
  console.log(`✅ ${pkg.name} 已同步至 ${newVersion}`);
}
