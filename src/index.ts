const path = process.env.NEX_EXTENSION_PATH || '';

if (path === '') {
  process.stdout.write("To run this extension NEX_EXTENSION_PATH must be set\n")
  process.exit(1)
}

async function invoke(input: string) {
  const handler = require(path)
  try {
    const event: any = JSON.parse(input)
    await handler.run(event);
  } catch(err) {
    process.stdout.write(err)
  }
}

function main() {
  let input = ''
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null){
        input += chunk;
    }
  });
  process.stdin.on('end', () => {
    invoke(input)
  });  
}
main()