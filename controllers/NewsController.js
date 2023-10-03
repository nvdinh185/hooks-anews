const mysql = require('mysql');

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "anews"
};

class NewsController {

    // [GET] /news
    async getListNews(req, res) {
        try {
            var conn = mysql.createConnection(configDB);

            const listNews = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM news`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(listNews);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }

    // [GET] /news/newsbycat
    async getListNewsByCat(req, res) {
        var catId = req.query.cid;
        try {
            var conn = mysql.createConnection(configDB);

            const listNewsByCat = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM news WHERE cat_id = ${catId}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(listNewsByCat);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }

    // [GET] /news/newsbyid
    async getNewsById(req, res) {
        var id = req.query.id;
        try {
            var conn = mysql.createConnection(configDB);

            const newsById = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM news WHERE id = ${id}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(newsById[0]);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }
}

module.exports = new NewsController();
