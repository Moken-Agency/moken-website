import moment from "moment";

export const formatEvents = (responseEvents) => {
    return {
        ...responseEvents,
        events: responseEvents.events.map(event => (
            {
                title: moment(event.start.utc).format('l'),
                subtitle: event.name.text,
                action: () => window.open(event.url,'_blank'),
                description: event.description.text
            }
        ))
    }
}

