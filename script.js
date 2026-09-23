function showDetails(service) {

    const detailsBox = document.getElementById("service-details");
    const content = document.getElementById("details-content");

    let html = "";

    if (service === "post") {

        html = `
            <h3 class="details-title">Social Media Post Design</h3>

            <p class="details-intro">
                Professional social media creatives designed to make your
                business look attractive and professional online.
            </p>

            <ul class="details-list">
                <li>Instagram & Facebook post designs</li>
                <li>Product & service promotional posts</li>
                <li>Festival & special occasion creatives</li>
                <li>Offer & promotional banners</li>
                <li>Business announcement designs</li>
            </ul>

            <div class="details-highlight">
                <strong>Perfect for:</strong> Small businesses, startups,
                salons, hospitals, restaurants and local brands.
            </div>
        `;

    }

    else if (service === "content") {

        html = `
            <h3 class="details-title">Content Planning</h3>

            <p class="details-intro">
                A simple content strategy to help your brand stay active
                and consistent on social media.
            </p>

            <ul class="details-list">
                <li>Monthly content ideas</li>
                <li>Post topic planning</li>
                <li>Promotional content ideas</li>
                <li>Educational content ideas</li>
                <li>Content calendar planning</li>
            </ul>

            <div class="details-highlight">
                <strong>Goal:</strong> Keep your social media page
                organized, consistent and engaging.
            </div>
        `;

    }

    else if (service === "caption") {

        html = `
            <h3 class="details-title">Caption Writing</h3>

            <p class="details-intro">
                Captions written according to your business, audience and
                social media content.
            </p>

            <ul class="details-list">
                <li>Instagram captions</li>
                <li>Promotional captions</li>
                <li>Short & engaging hooks</li>
                <li>Call-to-action captions</li>
                <li>Relevant hashtag suggestions</li>
            </ul>

            <div class="details-highlight">
                <strong>Focus:</strong> Clear, engaging and
                business-friendly communication.
            </div>
        `;

    }

    else if (service === "instagram") {

        html = `
            <h3 class="details-title">Instagram Management</h3>

            <p class="details-intro">
                Basic social media management support to keep your
                Instagram presence organized and professional.
            </p>

            <ul class="details-list">
                <li>Profile organization</li>
                <li>Content planning</li>
                <li>Post scheduling support</li>
                <li>Caption & hashtag support</li>
                <li>Page presentation improvement</li>
            </ul>

            <div class="details-highlight">
                <strong>Result:</strong> A cleaner and more professional
                looking Instagram presence.
            </div>
        `;

    }

    else if (service === "branding") {

        html = `
            <h3 class="details-title">Branding & Creative Design</h3>

            <p class="details-intro">
                Build a consistent visual identity so your audience can
                easily recognize your brand.
            </p>

            <ul class="details-list">
                <li>Social media branding</li>
                <li>Colour combination suggestions</li>
                <li>Font selection</li>
                <li>Creative post templates</li>
                <li>Consistent visual style</li>
            </ul>

            <div class="details-highlight">
                <strong>Focus:</strong> Consistent and professional
                visual presentation.
            </div>
        `;

    }

    else if (service === "reels") {

        html = `
            <h3 class="details-title">Reels & Story Ideas</h3>

            <p class="details-intro">
                Creative short-form content concepts designed to help
                businesses showcase their products and services.
            </p>

            <ul class="details-list">
                <li>Product showcase Reel concepts</li>
                <li>Before & after Reel ideas</li>
                <li>Behind-the-scenes content</li>
                <li>Instagram Story sequences</li>
                <li>Question, poll & engagement ideas</li>
            </ul>

            <div class="details-highlight">
                <strong>Content Style:</strong> Hook → Value → Visual →
                Call to Action.
            </div>
        `;
    }

    content.innerHTML = html;

    detailsBox.classList.add("show");

    detailsBox.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function closeDetails() {

    const detailsBox = document.getElementById("service-details");

    detailsBox.classList.remove("show");

}

function toggleService(serviceId) {

    const selected = document.getElementById(serviceId);

    document.querySelectorAll(".service-details").forEach(function(details) {
        if (details !== selected) {
            details.classList.remove("active");
        }
    });

    selected.classList.toggle("active");
}