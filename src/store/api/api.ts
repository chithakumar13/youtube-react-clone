export const getVideos = () => {
    (gapi.client as any).youtube.videos.list({
        "part": [
            "snippet",
            "statistics",
            "contentDetails"
        ],
        "chart": "mostPopular",
        "regionCode": "IN",
        "maxResults": 14,
    })
        .then(function (response: any) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);

        })
}