import { VFC } from "react";
import { UserProfiel } from "../types/userProfile";

type Props = {
  usercard: UserProfiel;
};

export const UserCard: VFC<Props> = (props) => {
  const { usercard } = props;
  const style = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
  };
  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dt>{usercard.name} </dt>
        <dt>メール</dt>
        <dt>{usercard.email} </dt>
        <dt>住所</dt>
        <dt>{usercard.address} </dt>
      </dl>
    </div>
  );
};
