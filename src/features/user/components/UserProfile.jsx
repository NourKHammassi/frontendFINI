import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  TextField,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import {
  addAddressAsync,
  resetAddressAddStatus,
  resetAddressDeleteStatus,
  resetAddressUpdateStatus,
  selectAddressAddStatus,
  selectAddressDeleteStatus,
  selectAddressStatus,
  selectAddressUpdateStatus,
  selectAddresses,
} from "../../address/AddressSlice";
import { selectUserInfo } from "../UserSlice";
import { Address } from "../../address/components/Address";

const palette = {
  bronze: "#AD946B",
  clay: "#B47E5D",
  sand: "#FAF9F7",
  text: "#2B2B2B",
  white: "#FFFFFF",
};

export const UserProfile = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const status = useSelector(selectAddressStatus);
  const userInfo = useSelector(selectUserInfo);
  const addresses = useSelector(selectAddresses);
  const theme = useTheme();
  const [addAddress, setAddAddress] = useState(false);

  const addressAddStatus = useSelector(selectAddressAddStatus);
  const addressUpdateStatus = useSelector(selectAddressUpdateStatus);
  const addressDeleteStatus = useSelector(selectAddressDeleteStatus);

  const is900 = useMediaQuery(theme.breakpoints.down(900));
  const is480 = useMediaQuery(theme.breakpoints.down(480));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (addressAddStatus === "fulfilled") toast.success("Adresse ajoutée");
    if (addressAddStatus === "rejected") toast.error("Erreur d’ajout d’adresse");
  }, [addressAddStatus]);

  useEffect(() => {
    if (addressUpdateStatus === "fulfilled") toast.success("Adresse mise à jour");
    if (addressUpdateStatus === "rejected") toast.error("Erreur de mise à jour");
  }, [addressUpdateStatus]);

  useEffect(() => {
    if (addressDeleteStatus === "fulfilled") toast.success("Adresse supprimée");
    if (addressDeleteStatus === "rejected") toast.error("Erreur de suppression");
  }, [addressDeleteStatus]);

  useEffect(() => {
    return () => {
      dispatch(resetAddressAddStatus());
      dispatch(resetAddressUpdateStatus());
      dispatch(resetAddressDeleteStatus());
    };
  }, [dispatch]);

  const handleAddAddress = (data) => {
    const address = { ...data, user: userInfo._id };
    dispatch(addAddressAsync(address));
    setAddAddress(false);
    reset();
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${palette.sand} 0%, #F4F1EC 100%)`,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        py: is480 ? 2 : 6,
      }}
    >
      <Stack
        component={motion.div}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        width={is900 ? "95%" : "55rem"}
        spacing={3}
      >
        {/* Profile Card */}
        <Paper
          elevation={4}
          sx={{
            overflow: "hidden",
            borderRadius: "1rem",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${palette.bronze}33`,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          {/* Header */}
          <Stack
            alignItems="center"
            spacing={1.5}
            sx={{
              py: 4,
              background: `linear-gradient(135deg, ${palette.bronze}, ${palette.clay})`,
              color: palette.white,
            }}
          >
            <Avatar
              alt={userInfo?.name}
              src="none"
              sx={{
                width: 85,
                height: 85,
                border: "3px solid white",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              }}
            />
            <Typography variant="h6" fontWeight={700}>
              {userInfo?.name}
            </Typography>
            <Typography fontSize={14} sx={{ opacity: 0.85 }}>
              {userInfo?.email}
            </Typography>
          </Stack>

          {/* Addresses */}
          <Stack sx={{ p: 3 }} spacing={3}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: palette.text }}
            >
              Vos adresses
            </Typography>

            {addresses?.length ? (
              <Stack spacing={2}>
                {addresses.map((address) => (
                  <Address key={address._id} address={address} />
                ))}
              </Stack>
            ) : (
              <Typography fontSize={14} color="rgba(43,43,43,0.6)">
                Vous n’avez pas encore ajouté d’adresse.
              </Typography>
            )}

            {/* {!addAddress ? (
              <Button
                variant="contained"
                sx={{
                  alignSelf: "flex-start",
                  background: palette.bronze,
                  "&:hover": { background: palette.clay },
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                }}
                onClick={() => setAddAddress(true)}
              >
                Ajouter une adresse
              </Button>
            ) : (
              <Box
                component="form"
                onSubmit={handleSubmit(handleAddAddress)}
                display="flex"
                flexDirection="column"
                gap={1.5}
              >
                <TextField
                  size="small"
                  label="Adresse"
                  {...register("street", { required: true })}
                  fullWidth
                />
                <TextField
                  size="small"
                  label="Ville"
                  {...register("city", { required: true })}
                  fullWidth
                />
                <TextField
                  size="small"
                  label="Code postal"
                  {...register("postalCode", { required: true })}
                  fullWidth
                />

                <LoadingButton
                  type="submit"
                  variant="contained"
                  loading={status === "loading"}
                  sx={{
                    background: palette.clay,
                    "&:hover": { background: palette.bronze },
                    mt: 1,
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  Enregistrer
                </LoadingButton>
              </Box>
            )} */}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};
