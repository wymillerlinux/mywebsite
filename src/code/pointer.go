package main

import "fmt"

func main() {
	x := 15
	a := &x

	fmt.Println(a) // print mem addr
	fmt.Println(*a) // print value of x
}