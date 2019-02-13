package main

import (
	"fmt"
	"os"
)

var name string = os.Args[1]

func main(){
	result, err := fmt.Println("Hello,", name)
	
	if err != nil {
		panic(err)
	} else {
		fmt.Println(result)
	}
}
