package main

import (
	"os"

	"github.com/c-alloc/react-go/server/database"
	"github.com/c-alloc/react-go/server/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)



func main() {
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	routes.Setup(app)

	app.Static("/", "./out/")
	
	app.Listen(":" + os.Getenv("PORT") )
}