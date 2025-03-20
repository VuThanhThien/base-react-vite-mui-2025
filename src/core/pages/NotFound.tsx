import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router";
import Result from "../../core/components/Result";
import { Button } from "@mui/material";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Result
      extra={
        <Button
          color="secondary"
          component={RouterLink}
          to={`/admin`}
          variant="contained"
        >
          {t("common.backHome")}
        </Button>
      }
      image={<img
        src={"assets/404.svg"}
        alt="Logo"
      />}
      maxWidth="sm"
      subTitle={t("common.errors.notFound.subTitle")}
      title={t("common.errors.notFound.title")}
    />
  );
};

export default NotFound;
