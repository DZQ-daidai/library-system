package main

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    db,err := sql.Open("mysql","library:pwajd4JYXRL84zhw@tcp(api.daiweb.top:3306)/library?charset=utf8");
    if err != nil{
        fmt.Printf("connect mysql fail ! [%s]",err)
    }else{
        fmt.Println("connect to mysql success")
    }

    rows,err := db.Query("select id,username from user_info");
    if err != nil{
        fmt.Printf("select fail [%s]",err)
    }

    var mapUser map[string]string
    mapUser = make(map[string]string)

    for rows.Next(){
        var id string
        var username string
        rows.Columns()
        err := rows.Scan(&id,&username)
        if err != nil{
            fmt.Printf("get user info error [%s]",err)
        }
        mapUser[username] = id
    }

    for k,v := range mapUser{
        fmt.Println(k,v);
    }
}