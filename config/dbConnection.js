
module.exports = function (sqlQry, res){
    global.conn.request()
        .query(sqlQry)
        .then(result => {
            res.json(result.recordset)
            console.log(result.recordset);
        })
        .catch(err => res.json(err));
}