if (eventType === "user.created") {
  const { id, email_addresses, image_url, username, first_name, last_name } =
    evt.data;

  const mongoUser = await createUser({
    clerkId: id,
    name: `${first_name}${last_name ? ` ${last_name}` : ""}`,
    username: username!,
    email: email_addresses[0].email_address,
    image: image_url,
  });
  return NextResponse.json({ message: "OK", user: mongoUser });
}

if (eventType === "user.updated") {
  const { id, email_addresses, image_url, username, first_name, last_name } =
    evt.data;

  const mongoUser = await updateUser({
    clerkId: id,
    updateData: {
      name: `${first_name}${last_name ? ` ${last_name}` : ""}`,
      username: username!,
      email: email_addresses[0].email_address,
      image: image_url,
    },
    path: `/profile/${id}`,
  });
  return NextResponse.json({ message: "OK", user: mongoUser });
}

if (eventType === "user.deleted") {
  const { id } = evt.data;

  const deletedUser = await deleteUser({ clerkId: id! });

  return NextResponse.json({ message: "OK", user: deletedUser });
}
