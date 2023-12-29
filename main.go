package main

import (
	"log"
	_ "net/http/pprof"

	"github.com/WangEn/go-space-chat/core"
)

func main() {
	log.SetFlags(log.Lshortfile | log.LstdFlags)
	core.NewCore().Run()
}
