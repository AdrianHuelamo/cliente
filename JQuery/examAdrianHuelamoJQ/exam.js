$(document).ready(function () {
    tasks = [
        { id: 10234, title: "Prepare presentation slides", description: "Create slides for the quarterly team meeting.", date: "2025-12-15", completed: false },
        { id: 20856, title: "Review project proposal", description: "Read and provide feedback on the new client proposal.", date: "2025-12-14", completed: true },
        { id: 31729, title: "Update website content", description: "Refresh the homepage and blog with latest news.", date: "2025-12-16", completed: true },
        { id: 40987, title: "Schedule team lunch", description: "Coordinate with colleagues for a team-building lunch.", date: "2025-12-17", completed: true },
        { id: 52103, title: "Fix critical bug", description: "Resolve the login issue reported by users.", date: "2025-12-13", completed: true },
        { id: 63218, title: "Draft marketing email", description: "Write and send the monthly newsletter to subscribers.", date: "2025-12-18", completed: false },
        { id: 74562, title: "Attend client meeting", description: "Discuss project requirements and timeline.", date: "2025-12-12", completed: true },
        { id: 85673, title: "Organize office supplies", description: "Check inventory and order necessary items.", date: "2025-12-11", completed: false },
        { id: 96784, title: "Train new intern", description: "Guide the new intern through onboarding tasks.", date: "2025-12-10", completed: false },
        { id: 10895, title: "Backup server data", description: "Perform a full backup of all critical files.", date: "2025-12-16", completed: true }
    ];

    let containerpend = $("#pendingSection");
    let containercomp = $("#completedSection");

    function drawAllTasks(tasks) {        
        tasks.forEach(t => {            
            drawTask(t);
        });
    };

    function drawTask(task) {
        let card = $('<div>');
        let titleCard = $('<p>');
        let descriptionCard = $('<p>');
        let dateCard = $('<p>');
        let changeCard = $('<button>');
        let delCard = $('<button>');

        let completedCard = task.completed;
        completedCard = false;        

        card.addClass('taskCard')
        titleCard.addClass('taskTitle');
        descriptionCard.addClass('taskDesc');
        changeCard.addClass('cardButtons button');
        delCard.addClass('cardButtons button');

        titleCard = task.title;
        descriptionCard = task.description;
        dateCard = task.date;
        delCard.value = "Delete X"

        card.append(titleCard);
        card.append(descriptionCard);
        card.append(dateCard);
        card.append(delCard);

        if (completedCard == false) {
            containerpend.append(card);
        } else {
            containercomp.append(card);
        };
    }
    
    drawAllTasks(tasks)
});