const HomeController = {
  index: function(req, res) {
    res.render('index', { title: 'Million' });
  }
}

module.exports = HomeController