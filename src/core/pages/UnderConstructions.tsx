import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router";
import Result from "../../core/components/Result";
import { Button } from "@mui/material";

const UnderConstructions = () => {
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
      image={<img src={"assets/constructions.svg"} alt="Logo" />}
      maxWidth="sm"
      subTitle={t("common.errors.underConstructions.subTitle")}
      title={t("common.errors.underConstructions.title")}
    />
  );
};

export default UnderConstructions;
