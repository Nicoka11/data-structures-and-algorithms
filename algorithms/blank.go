package main

import (
	"reflect"
	"strconv"
)

func main() {

}

type NumberMap map[byte]int

func sameFrequency(n1 int, n2 int) bool { 
	if len(strconv.Itoa(n1)) != len(strconv.Itoa(n2)) {
		return false
	}

	n1str := strconv.Itoa(n1)
	n2str := strconv.Itoa(n2)

	fc1 := make(NumberMap)
	fc2 := make(NumberMap)

	for i := 0; i < len(n1str); i++ {
		fc1[n1str[i]] = (fc1[n1str[i]] | 0) + 1
	}

	for i := 0; i < len(n2str); i++ {
		fc2[n2str[i]] = (fc2[n2str[i]] | 0) + 1
	}

	return reflect.DeepEqual(fc1, fc2)
}