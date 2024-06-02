export const local_url = "http://13.250.35.37:8989";
export const local_port = "8989";

export const test_prod_url = "https";
export const test_prod_port = "";

export const ADMIN_ENV: "PROD" | "DEV" | "LOCAL" = "LOCAL";
export const version = "v1";
export const headers = {
	Accept: "application/json",
	"Content-Type": "application/json"
};

export const prod_url = "https";
export const prod_port = "//dev-portal-backend.enrollment.nexcaliber.com";

export const dev_prod_url = "https";
export const dev_prod_port = "//enrollment.nexcaliber.com";




export const url =
	String(ADMIN_ENV) === "PROD"
		? prod_url
		: String(ADMIN_ENV) === "DEV"
		? dev_prod_url
		: String(ADMIN_ENV) === "LOCAL"
		? local_url
		: ""; // Has to change for Dev, local and prod

export const port =
    String(ADMIN_ENV) === "PROD"
        ? prod_port
        : String(ADMIN_ENV) === "DEV"
        ? dev_prod_port
        : String(ADMIN_ENV) === "LOCAL"
        ? local_port
        : ""; // Has to change for Dev, local and prod


export const LINK = `${url}:${port}/api/v1`;