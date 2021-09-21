var mc = require('minecraft-protocol');
const Chunk = require('prismarine-chunk')('1.16.5')
const mcData = require('minecraft-data')("1.16.5")



var server = mc.createServer({
  'online-mode': false,   // optional
  motd: '§dNeumaticProxy §7- §cThe Limbo',
  encryption: true,      // optional
  host: '0.0.0.0',       // optional
  port: 25565,           // optional
  version: '1.16.5',
  maxPlayers: 0,
});

server.on('login', function(client) {
  let loginPacket = mcData.loginPacket


  client.write('login', {
    entityId: "ender_dragon",
    isHardcore: false,
    gameMode: 1,
    previousGameMode: 254,
    worldNames: ["minecraft:the_end"],
    dimensionCodec: loginPacket.dimensionCodec,
    dimension: loginPacket.dimension,
    worldName: 'minecraft:the_end',
    hashedSeed: [-1290133862, -1967592212],
    maxPlayers: server.maxPlayers,
    viewDistance: -1,
    reducedDebugInfo: false,
    enableRespawnScreen: false,
    isDebug: false,
    isFlat: true
  });

  client.write('position', {
    x: 0,
    y: 100,
    z: 0,
    yaw: 0,
    pitch: 0,
    flags: 0x00
  });

  
  client.write("chat", { message: JSON.stringify({ translate: '§6'+client.username+' test' }), position: 0, sender: '0' });
});
