let args = process.argv
if (!args[2]) {
  process.stdout.write('\x07');
}
for (let i = 2; i < args.length; i++) {
  if (parseInt(args[i]) && args[i] >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, args[i] * 1000);
  }
}