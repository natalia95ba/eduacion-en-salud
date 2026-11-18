
export const isFeatureFlagAllowed = () => {
    return Boolean(localStorage.getItem("entornoPruebas"));
}