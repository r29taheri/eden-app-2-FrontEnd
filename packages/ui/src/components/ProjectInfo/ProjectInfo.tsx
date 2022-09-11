import { Project } from "@graphql/eden/generated";
import HeartIcon from "@heroicons/react/outline/HeartIcon";
import { BsArrowRight } from "react-icons/bs";
import { Avatar, Button } from "ui";

export interface IProjectInfoProps {
  project?: Project;
  avatarSrc?: string;
  projectSubTitle?: string;
  isFavoriteButton?: boolean;
  isRoleView?: boolean;
  submitting?: boolean;
  isFavorite?: boolean;
  onSwitchView?: () => void;
  onSetFavorite?: () => void;
}

export const ProjectInfo = ({
  project,
  avatarSrc,
  projectSubTitle,
  isFavoriteButton,
  isRoleView,
  submitting,
  isFavorite,
  onSwitchView,
  onSetFavorite,
}: IProjectInfoProps) => {
  return (
    <div className={`desc flex-col`}>
      <div className="p-2">
        <div className="flex flex-row content-center items-center justify-start">
          <div>
            <Avatar size="lg" src={avatarSrc} isProject />
          </div>
          <div className="ml-6">
            <div
              className={`text-2xl font-normal tracking-wide text-neutral-700`}
            >
              {project?.title}
            </div>
            <div className={`text-lg text-neutral-400`}>{projectSubTitle}</div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-justify">{project?.description}</p>
        </div>
        <div className="mt-4 flex flex-row">
          <div className="mr-5">
            <Button
              variant={`secondary`}
              radius="rounded"
              onClick={onSwitchView}
            >
              {isRoleView ? `See Project Activity` : `See Project Roles`}
              <span className={`my-auto pl-2`}>
                <BsArrowRight />
              </span>
            </Button>
          </div>
          {isFavoriteButton && (
            <div className="mr-5">
              <button
                disabled={submitting}
                className="text-soilBody flex flex-row content-center items-center rounded-md bg-[#FFEEEE] py-1 px-3 text-lg font-normal tracking-wide"
                onClick={onSetFavorite}
              >
                <span className={`mr-2`}>
                  {!isFavorite ? (
                    <HeartIcon
                      className="h-7 w-7"
                      stroke="red"
                      strokeWidth="1"
                    />
                  ) : (
                    <HeartIcon
                      className="h-7 w-7"
                      fill="red"
                      stroke="red"
                      strokeWidth="1"
                    />
                  )}
                </span>
                Add to favourites
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
