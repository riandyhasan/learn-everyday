package main

type QueryOpt func(*Query)

func WithStartDate(startDate string) QueryOpt {
	return func(q *Query) {
		q.StartDate = startDate
	}
}

func WithEndDate(endDate string) QueryOpt {
	return func(q *Query) {
		q.EndDate = endDate
	}
}

func WithPage(page int) QueryOpt {
	return func(q *Query) {
		q.Page = page
	}
}

func WithPageSize(pageSize int) QueryOpt {
	return func(q *Query) {
		q.PageSize = pageSize
	}
}

func WithName(name string) QueryOpt {
	return func(q *Query) {
		q.Name = name
	}
}
