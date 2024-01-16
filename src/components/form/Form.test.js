import Form from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Koşulların onaylanmasına göre buton aktifliği", async () => {
  // Form bileşenini ekrana bas
  render(<Form />);

  const user = userEvent.setup();

  // gerekli elemanları al
  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  // checkbox başlangıçta tiksizdir
  expect(checkBox).not.toBeChecked();

  // buton başlangıçta inaktiftir
  expect(orderBtn).toBeDisabled();

  // checkbox tiklenir
  await user.click(checkBox);

  // buton aktif olur
  expect(orderBtn).toBeEnabled();

  // checkbox'tan tik kaldırılır
  await user.click(checkBox);

  // buton inaktif olur
  expect(orderBtn).toBeDisabled();
});

test("Onayla butonu hover olunca bildirim ekrana gelir", async () => {
  render(<Form />);

  const user = userEvent.setup();

  // gerekli elemanlar cağırılır
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const popup = screen.getByText(/size gerçekten/i);

  // checkbox u tikleyip
  await user.click(checkbox);

  //mausu butonun üzerine getir

  fireEvent.mouseEnter(button);

  // bildirim gözüküyotmu (tobevisible : opacity>0 ; visibility : display !none)

  expect(popup).toBeVisible();

  // mause u butondan çek

  fireEvent.mouseLeave(button);

  // popup gözükmez
  expect(popup).not.toBeVisible();
});
