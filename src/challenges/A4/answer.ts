/**
 * In this challenge, you have to regroup messages into an array of day based on their
 * sentAt property.
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ...
 * instead of setHouts, setMinutes, ... to avoid timezone offsets!
 *
 * Example:
 * Input: [{ message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" }, { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" }, { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" }]
 * Output: [
 *      {
 *          day: "2020-11-17T00:00:00.000Z",
 *          messages: [
 *              { message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" },
 *              { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" },
 *          ]
 *      },
 *      {
 *          day: "2020-11-18T00:00:00.000Z",
 *          messages: [
 *              { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" },
 *          ]
 *      },
 * ]
 *
 * @param messages List of messages, unsorted and not grouped in days
 * @returns Sorted list of days (only days with messages!) with a list of sorted messages of the day
 */

// ↓ uncomment bellow lines and add your response!
export default function ({ messages }: { messages: Message[] }): DayMessages[] {
  let result: DayMessages[] = [];
  messages
    .sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime())
    .forEach((message) => {
      let date = new Date(message.sentAt);
      const dayResult: DayMessages = {
        day: new Date(date.setUTCHours(0, 0, 0, 0)).toISOString(),
        messages: messages.filter((message) => {
          return (
            new Date(
              new Date(message.sentAt).setUTCHours(0, 0, 0, 0)
            ).toString() === new Date(date.setUTCHours(0, 0, 0, 0)).toString()
          );
        }),
      };
      result = [...result, dayResult];
    });

  const soluce: DayMessages[] = [];

  //Remove duplicates items
  for (const item of result) {
    if (
      !soluce.find((currentItem: DayMessages) => {
        return currentItem.day === item.day;
      })
    ) {
      soluce.push(item);
    }
  }
  return soluce;
}

// used interfaces, do not touch
export interface Message {
  author: string;
  sentAt: string;
  message: string;
}

export interface DayMessages {
  day: string;
  messages: Message[];
}
