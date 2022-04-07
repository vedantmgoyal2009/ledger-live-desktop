import { sortAccountsByStatus } from "./swap";

const accounts = [
  { type: "Account", name: "test1", disabled: false },
  { type: "TokenAccount", name: "test1 - sub1", disabled: true },
  { type: "TokenAccount", name: "test1 - sub2", disabled: false },
  { type: "Account", name: "test2", disabled: false },
  { type: "Account", name: "test3", disabled: true },
  { type: "TokenAccount", name: "test3 - sub1", disabled: false },
  { type: "Account", name: "test4", disabled: true },
  { type: "TokenAccount", name: "test4 - sub1", disabled: true },
  { type: "Account", name: "test5", disabled: false },
];

const expectedOrder = [
  "test1",
  "test1 - sub2",
  "test1 - sub1",
  "test2",
  "test3",
  "test3 - sub1",
  "test5",
  "test4",
  "test4 - sub1",
];

test("SortAccountsByStatus should keep disable accounts with active subAccounts before disable accounts", () => {
  expect(sortAccountsByStatus(accounts).map(value => value.name)).toEqual(expectedOrder);
});
