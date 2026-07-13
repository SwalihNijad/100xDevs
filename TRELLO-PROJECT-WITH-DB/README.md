Backend is Done!
Frontend will create after learinig react!

How backend works?

signup:
    Put username pass in the body and get that and you willl be signed up!
signin:
    same but this time you will recieve the token
    put that token in your headers value for further requests

organization:
    put token and create organization by title and description
    the username which you logged in will be the admin of that
    org will itself have id

    boards:
        same token and create boards with authorization(see code)
        create board by orgid and title description and also created by(mostly you, the username)
        boards will have id

            issues:
            same token  and create issues(see code)
            create issues by boarid and title description and also created by(mostly you, the username)
            issues will have id 

get request thru query
for boards -> /boards?organizationId=.......
for issues -> /issues?boardId=.......
for members -> /members?organizationId=.......

also organization /org..?org..Id=....

