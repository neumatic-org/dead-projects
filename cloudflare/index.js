const { key, email, zone } = require('./cf')

const cf = require('cloudflare')({
    token: '50d9a89cce9f8c5fbb0db6fb0090392b5ff72'
  });

  //const a = new cf.DNSRecord({"type":"A", "name": "izmccomms.cf", "content": "127.0.0.1", "ttl": 120, "proxied": false }) 
cf.dnsRecords.add("40f99a55348f3b93800c238324018cc2", {"type":"A", "name": "aff", "content": "127.0.0.1", "ttl": 120, "proxied": false });
//const c = cf.zones.browse()

//console.log(c)