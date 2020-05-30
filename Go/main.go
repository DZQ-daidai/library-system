package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

const (
	host     = "47.94.9.152"
	port     = 3306
	user     = "librarysystem"
	password = "pwajd4JYXRL84zhw"
	dbname   = "librarysystem"
)

//连接数据库
func connect() *sql.DB {
	mysqlInfo := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8",
		user, password, host, port, dbname)

	db, err := sql.Open("mysql", mysqlInfo)
	if err != nil {
		panic(err)
	}
	err = db.Ping()
	if err != nil {
		panic(err)
	}
	fmt.Println("数据库连接成功!")
	return db
}

//解决跨域访问
func cross() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "Content-Type,AccessToken,X-CSRF-Token, Authorization, Token")
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type")
		c.Header("Access-Control-Allow-Credentials", "true")
		//放行所有OPTIONS方法
		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}
		// 处理请求
		c.Next()
	}
}

///////////////////////////////////////////////////////////////

// GetPersonAPI 返回
func GetPersonAPI(db *sql.DB, id string) string {
	var name string
	err := db.QueryRow("select administrator_name from administrator where administrator_id=?", id).Scan(&name)
	if err != nil {
		if err == sql.ErrNoRows {
		} else {
			log.Fatal(err)
		}
	}
	return name
}

func main() {
	db := connect()
	router := gin.Default()
	router.Use(cross())

	router.GET("/user", func(c *gin.Context) {
		//context.String(http.StatusOK, "Work!")
		name := GetPersonAPI(db, c.Query("id"))
		c.JSON(http.StatusOK, gin.H{
			"name": name,
		})
	})

	router.Run(":8080")
}
