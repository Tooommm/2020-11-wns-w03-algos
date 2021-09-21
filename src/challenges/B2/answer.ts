/**
 * In this challenge, you have to get all the categories from the events. The categories
 * must be unique and sorted from A to Z.
 *
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */

export default function ({
  events,
}: {
  events: EventWithCategory[];
}): string[] {
  return [
    ...new Set<string>(
      events
        .map((event) => {
          return event.categories;
        })
        .flat()
        .sort()
    ),
  ];
}

// used interfaces, do not touch
export interface EventWithCategory {
  startDatetime: string;
  endDatetime: string;
  event: string;
  categories: string[];
}
