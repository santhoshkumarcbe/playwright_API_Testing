import { test, expect } from "@playwright/test";

test("Api DELETE Request", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");

  expect(response.status()).toBe(204);
});

test("API PUT Request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "sk",
      job: "Teacher",
    },
  });

  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("sk");

  console.log(await response.json());
});

test("API POST Request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "sk",
      job: "Teacher",
    },
  });

  expect(response.status()).toBe(201);

  const text = await response.text();
  expect(text).toContain("sk");

  console.log(await response.json());
});

test("Api GET Request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");

  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("Janet");

  console.log(await response.json());
});
