const template = document.createElement('template');

template.innerHTML = `
    <nav class="navbar navbar-expand justify-content-center">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="../index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="aboutMe.html">About me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pastExperience.html">Professional Experience</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="projects.html">Projects</a>
            </li>
        </ul>
    </nav>
`;

document.body.appendChild(template.content);
