//@ts-nocheck
/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common.
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 *
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

import { group } from "console";

// ↓ uncomment bellow lines and add your response!

export default function ({
  groups,
}: {
  groups: GroupWithSills[];
}): GroupWithSillsAndClosestGroups[] {
  return groups.map((group) => {
    return {
      ...group,
      closestGroups: groups.reduce((acc, currentValue) => {
        return [];
      }, []),
    };
  });
}

// used interfaces, do not touch
export interface GroupWithSills {
  name: string;
  skills: string[];
}

export interface GroupWithSillsAndClosestGroups extends GroupWithSills {
  closestGroups: GroupWithSills[];
}
