let handler = m => m
handler.all = async function (m) {
        let setting = global.db.data.settings[this.user.jid]

let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
                let bio = `\n⌚Bot ini telah aktif selama ${muptime}\n\n @burha>
                await this.updateProfileStatus(bio).catch(_ => _)
                setting.status = new Date() * 1

}
export default handler
