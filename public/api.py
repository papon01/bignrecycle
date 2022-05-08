
from google.cloud import bigquery_connection_v1 as bq_connection


def main(project_id: str = "bignrecycle", location: str = "asia-southeast1") -> None:
    """Prints details and summary information about connections for a given admin project and location"""
    client = bq_connection.ConnectionServiceClient()
    print(f"List of connections in project {project_id} in location {location}")
    req = bq_connection.ListConnectionsRequest(
        parent=client.common_location_path(project_id, location)
    )
    for connection in client.list_connections(request=req):
        print(f"\tConnection {connection.friendly_name} ({connection.name})")
