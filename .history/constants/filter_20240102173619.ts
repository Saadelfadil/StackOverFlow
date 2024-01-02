export const AnswerFilters = [
2 { name: "Highest Upvotes", value: "highestUpvotes" },
3 { name: "Lowest Upvotes", value: "lowestUpvotes" },
4 { name: "Most Recent", value: "recent" },
5 { name: "Oldest", value: "old" },
6 ];
7
8 export const UserFilters = [
9 { name: "New Users", value: "new_users" },
 
10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41
{ name: "Old Users", value: "old_users" },
{ name: "Top Contributors", value: "top_contributors" }, ];
export const QuestionFilters = [
{ name: "Most Recent", value: "most_recent" },
{ name: "Oldest", value: "oldest" },
{ name: "Most Voted", value: "most_voted" },
{ name: "Most Viewed", value: "most_viewed" },
{ name: "Most Answered", value: "most_answered" },
];
export const TagFilters = [
{ name: "Popular", value: "popular" }, { name: "Recent", value: "recent" },
{ name: "Name", value: "name" },
{ name: "Old", value: "old" },
];
export const HomePageFilters = [
{ name: "Newest", value: "newest" },
{ name: "Recommended", value: "recommended" }, { name: "Frequent", value: "frequent" },
{ name: "Unanswered", value: "unanswered" },
];
export const GlobalSearchFilters = [
{ name: "Question", value: "question" }, { name: "Answer", value: "answer" },
{ name: "User", value: "user" },
{ name: "Tag", value: "tag" },
];