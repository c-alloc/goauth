package routes

import (
	"github.com/c-alloc/react-go/server/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	route := app.Group("/api")
	{
		route.Post("/register", controllers.Register)
		route.Post("/login", controllers.Login)
		route.Post("/logout", controllers.Logout)
	}

	app.Get("/", controllers.Home)
	app.Get("/login", controllers.Signin)
	app.Get("/register", controllers.Signup)
	app.Get("/user", controllers.User)
}
