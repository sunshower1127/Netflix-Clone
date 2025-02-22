package main

import (
	"flag"
	"fmt"
	"math/rand/v2"
	"os"
	"path/filepath"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	delayInput := flag.Int("delay", 5000, "최대 딜레이를 입력해주세요(ms)")
	flag.Parse()

	app := fiber.New()

	// CORS 설정
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	// 이미지 파일들을 메모리에 로드
	imageFiles, err := os.ReadDir("netflix-images")
	if err != nil {
		panic(err)
	}

	fmt.Println("이미지", len(imageFiles), "개")

	// GET /image/:id 엔드포인트 설정
	app.Get("/image/:id", func(c *fiber.Ctx) error {
		id := c.Params("id")
		imageIndex := 0

		// id를 정수로 변환 (에러 처리는 생략)
		if num, err := strconv.Atoi(id); err == nil {
			imageIndex = num % len(imageFiles)
		}

		if imageIndex >= len(imageFiles) {
			return c.Status(404).SendString("Image not found")
		}

		filename := imageFiles[imageIndex].Name()
		filepath := filepath.Join("netflix-images", filename)

		// 디버깅을 위한 인위적 딜레이 (500ms)
		delay := time.Duration(rand.IntN(*delayInput)) * time.Millisecond
		time.Sleep(delay)

		// 캐시 컨트롤 헤더 설정 (캐싱 비활성화)
		c.Response().Header.Set("Cache-Control", "no-store, no-cache, must-revalidate")
		c.Response().Header.Set("Pragma", "no-cache")

		fmt.Println("이미지 전송완료.", delay)

		return c.SendFile(filepath)
	})

	app.Listen(":3000")
}
