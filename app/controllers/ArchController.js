const Archive = require('../models/Archive');

module.exports = {
  upload: async (req, res) => {
    const { file } = req.body;
    console.log('File Controller Upload');

    try {

      const reply = await Archive.create({
        file
      });
      res.status(200).json({ status: '200' });

    } catch (err) {
      console.log(err);
      res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
    }

  }

}