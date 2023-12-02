const templateFooter = document.createElement('template');

templateFooter.innerHTML = `
<footer>
    <div class="iconWithHeaderDiv">
        <p style="margin-right:10px">Francisco Relvão - 2023</p>
        <a href="https://github.com/chicorelvao"> 
            <img  class="socialMediaIcon" src="../images/icons/github.png" width=20px alt="github link"></a>
        <a href="https://www.linkedin.com/in/franciscorelvao/"> 
            <img  class="socialMediaIcon" src="../images/icons/linkedin.png" width=20px alt="linkedin profile"></a>
    </div>
</footer>
`;

document.body.appendChild(templateFooter.content);