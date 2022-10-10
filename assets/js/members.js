async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function getrole(data) {
    let roles = 'Member'
    return roles;
}

async function membergen(data) {
    let username = data.login

    let roles = await getrole(username);

    let template = `
    <div class="member" onclick="window.open('${data.html_url}')">
    <div class="member_img">
        <img src="${data.avatar_url}" alt="member ">
    </div>
    <div class="information">
        <h1 class="username">${username}</h1>
        <h2 class="role">${roles}</h2>
    </div>
    </div>
    `;
    return template;
}

// onload function
window.addEventListener('load', (event) => {
    // get members from https://api.github.com/orgs/devcommunities/public_members and then loop
    fetchAsync("https://api.github.com/orgs/devcommunities/public_members").then(
        data => {
            if (data != undefined) {

                data.forEach(member => {
                    // select members container
                    let member_container = document.getElementById("members_container");
                    // create card element
                    membergen(member).then(
                        template => {
                            member_container.innerHTML += template;
                        }
                    )
                })

            } else {
                console.log(data);
            }
        });
});