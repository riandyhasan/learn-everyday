package main

import (
	"encoding/json"
	"os"
)

type Handler struct {
	query Query
}

type Query struct {
	StartDate string
	EndDate   string
	Page      int
	PageSize  int
	Name      string
}

func New(opts ...QueryOpt) *Query {
	q := &Query{}
	// Set options to q
	for _, opt := range opts {
		opt(q)
	}
	return q
}

func (q *Query) Run() error {
	return json.NewEncoder(os.Stderr).Encode(q)
}

func main() {
	handler := &Handler{
		query: *New(
			WithStartDate("2024/01/01"),
			WithEndDate("2024/01/31"),
			WithPage(1),
			WithPageSize(10),
			WithName("Bambang"),
		),
	}
	handler.query.Run()
}
