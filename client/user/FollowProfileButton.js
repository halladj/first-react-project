import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { follow, unfollow } from "./api-user";

export default function FollowProfileButton(props) {
  const followClick = () => {
    props.onButtonClick(follow);
  };

  const unfollowClick = () => {
    props.onButtonClick(unfollow);
  };

  return (
    <div>
      {props.following ? (
        <Button variant="contained" color="secondary" onClick={unfollowClick}>
          Unfollow
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={followClick}>
          follow
        </Button>
      )}
    </div>
  );
}

FollowProfileButton.PropTypes = {
  following: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
