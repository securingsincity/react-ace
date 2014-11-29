// var B = require('../').Buffer
// var test = require('tape')
// var useragent = require('useragent')
// if (process.env.OBJECT_IMPL) B.TYPED_ARRAY_SUPPORT = false


// test('expected browsers get Uint8Array implementation', function (t) {
//   if (typeof navigator === 'undefined') {
//     t.pass('Not running in a browser -- skip this test')
//     t.end()
//     return
//   }
//   var agent = useragent.parse(navigator.userAgent)
//   console.log('Family: ' + agent.family)
//   console.log('Version: ' + agent.major + '.' + agent.minor)

//   if ((agent.family === 'Chrome' && agent.major >= 7) ||
//       (agent.family === 'Internet Explorer' && agent.major >= 10) ||
//       (agent.family === 'Firefox' && agent.major >= 30) ||
//       (agent.family === 'Opera' && agent.major >= 12) ||
//       (agent.family === 'Safari' && agent.major === 5 && agent.minor === 1) ||
//       (agent.family === 'Safari' && agent.major === 6)) {
//     t.ok(B._useTypedArrays)
//   } else {
//     t.ok(!B._useTypedArrays)
//   }
//   t.end()
// })
